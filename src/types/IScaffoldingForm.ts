export interface IScaffoldingForm {
  FullName: string;
  Email: string;
  PhoneNumber: string;
  Message: string;
  Dimensions?: IDimensions;
}

interface IDimensions {
  Width?: number | null;
  Height?: number | null;
  Length?: number | null;
}
