import pb from './../styles/warningButton.module.css'

function WarningButton(){
    return(
        <div>
            <button className={`${pb.warning}`}>Warning</button>
        </div>
    );
}

export default WarningButton;