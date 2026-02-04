import { ButtonContainer } from "./styles"


type ButtonProps = React.ComponentProps<"button"> &{
    
    isLoading?:boolean;
    variant?: "base"|"icon"|"iconSmall";
    buttonColor?:"primary" |"outline"|"ghost";
}
export function Button({children,isLoading,buttonColor="primary",type="button", variant="base",...rest}:ButtonProps){
    return(
        <ButtonContainer type={type} $isLoading={isLoading} $variant={variant} $buttonColor={buttonColor} disabled={isLoading} {...rest}>
            {children}
        </ButtonContainer>
    )


}