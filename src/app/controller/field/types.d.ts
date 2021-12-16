import { InputTypeEnum } from "./enums";

export namespace IField {
  namespace Request {
    interface getById {
      params: {
        id: number;
      };
    }
    interface create { 
      body: {
        name: string;
        title: string;
        description: string;
        inputSettings: InputType.Settings;
        nativeSettings?: NativeType.Settings;
        localization: boolean;
        multiple: boolean;
        entityId: number;
      };
    }
    interface update {
      params: {
        id: number;
      };
      body: {
        title: string;
      };
    }
    interface destroy {
      params: {
        id: number;
      };
    }
  }
}

export namespace InputType {
  type Settings = TextFieldSettings;

  type BaseInputSettings = {
    type: InputTypeEnum;
    columnSize: number;
  };

  type TextFieldSettings = BaseInputSettings & {
    type: InputTypeEnum.TextField;
    label?: string;
    nullable: boolean;
    placeholder?: string;
    helperText?: string;
    errorText?: string;
    maxLength?: number;
    mask?: string;
    regex?: string;
  };
}

export namespace NativeType {
  type Type = "VARCHAR" | "INT";
  type Settings = {
    type?: string;
    unsigned?: boolean;
    length?: number;
    decimals?: number;
    notnull?: boolean;
    defaultValue?: any;
  };
}
