import Foo from '../src/foo';

describe('ES6 Foo', () => {
   let foo;

   beforeEach(() => {
      foo = new Foo();
   });

   it('should return Do Something when calling doSomething', done => {
      var testResult = (response) => {
         expect(response).toEqual([
            { id: 'Java_1.8', name: 'Java', version: '1.8' }
         ]);
         done();
      };

      var failTest = (error) => {
         expect(error).toBeUndefined();
      };

      foo.doSomething()
         .then(testResult)
         .catch(failTest);
   });
   
   it('should return Do Something Else when calling doSomethingElse', done => {
      var testResult = (response) => {
         expect(response).toEqual([
            { id: 'Java_1.8', name: 'Java', version: '1.8' }
         ]);
         done();
      };

      var failTest = (error) => {
         expect(error).toBeUndefined();
      };

      foo.doSomethingElse()
         .then(testResult)
         .catch(failTest);
   });
});
