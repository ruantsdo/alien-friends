interface AlienLoginData {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}

interface AlienName {
  first: string;
  last: string;
  title: string;
}

interface AlienData {
  email: string;
  login: AlienLoginData;
  name: AlienName;
}

export type { AlienLoginData, AlienName, AlienData };
