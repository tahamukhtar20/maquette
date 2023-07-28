/*** exports ***/
export const footerContent: IFooterContent = {
  title: "Des questions ? \nContactez-nous.",
  phone: {
    title: "Phone",
    content: "123-456-7890",
  },
  email: {
    title: "Email",
    content: "creadhesif.sas@gmail.com",
  },
};
/*** interfaces ***/
interface IFooterContent {
  title: string;
  phone: IOption;
  email: IOption;
}

interface IOption {
  title: string;
  content: string;
}
