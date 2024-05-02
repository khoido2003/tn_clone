export interface ContentDetail {
  id: string;
  header: string;
  steps: {
    title: string;
    description: string;
    time: string;
    recordBy: string;
    imgData: string[];
    diaryDetail: {
      title: string;
      description: string;
      time: string;
      imgData: string[];
    }[];
  }[];
}
