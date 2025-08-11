export interface ILoginFormProps {
    onSubmit: (data: ILoginFormValues) => void;
    isLoading: boolean;
}

export interface ILoginFormValues {
    mobile: string;
}
