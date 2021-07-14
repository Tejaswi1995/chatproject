export interface Sender {
  id: string;
  sender: {
    name: string;
    profileImage: string;
  };
  content: string;
  read: boolean;
  date: Date;
  receiver: {
    msg: {
      content: string;
      date: Date;
    };
  };
}
