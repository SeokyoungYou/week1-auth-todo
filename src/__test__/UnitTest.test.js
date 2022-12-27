const { validation } = require('../utils/validation');

describe('validation function test: 로그인/회원가입 input value 검증', () => {
  test('이메일 입력이 @을 포함하고, @ 이후 4 개의 문자를 포함하는 경우 통과됩니다.', () => {
    const testEmailPass = (value) => {
      expect(validation('email', value)).toBe(true);
    };
    testEmailPass('abc@naver.com');
    testEmailPass('abc@abckdjls');
    testEmailPass('123@gmail.com');
  });
  test('이메일 입력이 @을 포함하지 않거나 @ 이후 3 개 이하의 문자를 포함하는 경우 실패합니다. ', () => {
    const testEmailFail = (value) => {
      expect(validation('email', value)).toBe(false);
    };
    testEmailFail('abcabc');
    testEmailFail('abc@abc');
  });
  test('비밀번호 입력이 8-30 자의 문자인 경우 통과됩니다. ', () => {
    const testPasswordPass = (value) => {
      expect(validation('password', value)).toBe(true);
    };
    testPasswordPass('12345678');
    testPasswordPass('abc@klsdajk3928239ssjdhfks');
  });
});
