import { Text } from "react-native";

export default function Titulo(props) {
    return (
        <Text style={{
            color: props.color || '#000',
            marginTop: 10,
            marginBottom: 10,
            fontSize: 35,
            fontWeight: 'bold'
        }}>
            {props.title || ''}
        </Text>
    );
}

