import axios from "axios";


export function submitUser(input: Record<string, never>) {
    console.log(input);

    axios.post("https://64f41801932537f4051a1c63.mockapi.io/users",
        {
            name: input.email,
            mobile: input.phone,
        }
    );

}

export async function getAllUsers():Promise<object> {

    var res = await axios.get("https://64f41801932537f4051a1c63.mockapi.io/users");

    console.log("getAllUsers ", res["data"]);
    console.log("getAllUsers ", typeof res["data"]);
    return res["data"];
}
