import PrimaryButton from "./components/PrimaryButton";
import SuccessButton from "./components/SuccessButton";
import WarningButton from "./components/WarningButton";

//prop줘서 onclick으로 바뀌게도 하고싶었으나...
//지식과 시간의 부족으로 인해 구현하지 못함....
function Button(){
    return(
        <div>
            <PrimaryButton/>
            <SuccessButton/>
            <WarningButton/>
        </div>
        
    );
}

export default Button;