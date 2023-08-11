import pb from './../styles/successButton.module.css'

function SuccessButton(){
    return(
        <div>
            <button className={`${pb.success}`}>Success</button>
        </div>
    );
}

export default SuccessButton;