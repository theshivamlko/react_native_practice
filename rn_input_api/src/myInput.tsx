import {TextInput, View} from "react-native";
import {PropsWithChildren} from "react";
import {KeyboardType, KeyboardTypeOptions} from "react-native/Libraries/Components/TextInput/TextInput";


type SectionProps = PropsWithChildren<{
    hint: string;
    keyboardType: KeyboardTypeOptions;
    isMultiline: boolean;
    value: string;
    onChange: (test: string) => void;

}>;
export default function MyInput({
                                    children,
                                    hint,
                                    keyboardType,
                                    isMultiline,
                                    value,
                                    onChange
                                }: SectionProps): React.JSX.Element {
    return (

        <View style={{flexDirection: 'column'}}>

            <TextInput placeholder={hint} style={{
                borderWidth: 1, borderColor: 'black', margin: 10, color: '#000',

                fontSize: 20,
                marginHorizontal: 8,
                paddingHorizontal: 8,

            }}



                       placeholderTextColor={'#bfbfbf'}

                       value={value}
                       multiline={isMultiline ? true : false}

                       keyboardType={keyboardType}
                       autoCorrect={false}
                       onChange={(event) => {
                           onChange(event.nativeEvent.text)
                       }}
            />

        </View>
    );
}
