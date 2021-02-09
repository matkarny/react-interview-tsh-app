import { useState } from "react"

export const useModalVisible = () =>{
    const [ modalVisible, setModalVisible] = useState(false)

    const onOpen = () => setModalVisible(true)
    const onClose = () => setModalVisible(false)

    return { modalVisible, onOpen, onClose}
} 

export default useModalVisible