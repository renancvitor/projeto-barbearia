'use client'
import { useCallback } from 'react'

export default function useLocalStorage() {
    const get = useCallback((chave: string) => {
        const valorLocal = window?.localStorage?.getItem(chave)
        return valorLocal ? JSON.parse(valorLocal) : null
    }, [])

<<<<<<< HEAD
    const remove = useCallback((chave: string) => {
        window?.localStorage?.removeItem(chave)
    }, [])

=======
>>>>>>> 4708dc1 (Finalização terceiro dia)
    const set = useCallback((chave: string, valor: any) => {
        window?.localStorage?.setItem(chave, JSON.stringify(valor))
    }, [])

<<<<<<< HEAD
    return { get, set, remove }
=======
    return { get, set }
>>>>>>> 4708dc1 (Finalização terceiro dia)
}
