import AsyncStorage from "@react-native-async-storage/async-storage";
const useStorage = ()=> { 
//Buscar os itens salvos
const getItem = async (key) => {
    try{
        const passwords = await AsyncStorage.getItem(key);
        return JSON.parse(passwords) || [];

    }catch(error){
        console.log("Erro ao buscar", error)
        return [];
    }

    }
// salvar um item no storage
const saveItem = async (key, value) => {
    try{
        let passwords = await getItem(key);// busca o item
        passwords.push(value)// adiciona o item 

        await AsyncStorage.setItem(key, JSON.stringify(passwords)) // salva o item

    }catch(error){
        console.log("ERRO AO SALVAR", error)
    }

}
//remover um item do storage
const removeitem = async (key, item) => {
    try{
        let passwords = await getItem(key);

        let myPasswords = passwords.filter((password) => {
            return (password !== item)
        })

        await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
        return myPasswords;

    }catch(error){
        console.log("ERRO AO DELETAR", error)
    }

}

return {
    getItem,
    saveItem,
    removeitem,

}
}

export default useStorage