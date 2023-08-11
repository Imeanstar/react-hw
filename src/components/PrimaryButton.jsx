import pb from './../styles/primaryButton.module.css'

function PrimaryButton(){
    return(
        <div>
            <button className={`buttton ${pb.primary}`}>Primary</button>
        </div>
    );
}

export default PrimaryButton;