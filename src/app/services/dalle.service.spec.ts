import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {DalleService} from './dalle.service';

describe('DalleService', () => {
  let service: DalleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DalleService]
    });

    service = TestBed.inject(DalleService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();  // Make sure that there are no outstanding requests.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an image generation response', async () => {
    const dummyResponse = {
      "created": 1688547321,
      "data": [
        {
          "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-PpDbPKwjA4D6b9wEiq4bSn9w/user-KxABfZP4peqoTt5EdRe2tCfX/img-X1fnn762RsbKtkVY7ReCeATT.png?st=2023-07-05T07%3A55%3A21Z&se=2023-07-05T09%3A55%3A21Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-07-04T11%3A30%3A42Z&ske=2023-07-05T11%3A30%3A42Z&sks=b&skv=2021-08-06&sig=QjyjMdgKDAdzWgS/2yeDdQze2StSDgVZZO5ONaPrWG0%3D"
        }
      ]
    }

    const testPrompt = 'fat cat';

    service.generateImage(testPrompt).then((response) => {
      expect(response).toEqual(dummyResponse);

      // Assert that "created" is an integer with 10 digits
      expect(typeof response.created).toEqual('number');
      expect(response.created.toString().length).toEqual(10);

      // Assert that "data" is an array with one object, which has a URL string
      // 1. Assert that data is an array
      expect(Array.isArray(response.data)).toBe(true);

      // 2. Assert that data's array length is 1
      expect(response.data.length).toEqual(1);

      // 3. Assert that the array's first object is a string
      expect(typeof response.data[0].url).toEqual('string');

      // 4. Assert that the string starts with http, which suggests a URL
      expect(response.data[0].url.startsWith('http')).toBe(true);
    });


    const req = httpMock.expectOne('https://api.openai.com/v1/images/generations');
    expect(req.request.method).toBe('POST');
    req.flush(dummyResponse);
  });
});
