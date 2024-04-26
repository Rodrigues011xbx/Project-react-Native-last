import { TextInput } from "react-native";

export default function Input(props) {
    return (
        <TextInput
            value={props.value ?? ''}
            placeholder={props.placeholder ?? ""}
            onChangeText={props.funcao ?? undefined}
            secureTextEntry={props.password ?? false}
            keyboardType={props.type ?? "default"}
            placeholderTextColor="#999"

            style={{
                color: props.color || '#000',
                marginTop: 5,
                marginBottom: 5,
                borderWidth: 1,
                borderRadius: 7,
                borderColor: '#a9a9a9',
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 10,
                paddingRight: 10
            }}
        />
    );
}