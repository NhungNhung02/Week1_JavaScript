import "./Alert.css";

interface AlertProps {
    type: "success" | "warning" | "error";
    message: string;
}

const Alert = ({ type, message }: AlertProps) => {
    return (
        <div className={`alert alert-${type}`}>
            {message}
        </div>
    );
};

export default Alert;
