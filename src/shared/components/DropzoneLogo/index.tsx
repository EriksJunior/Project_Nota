import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { IoCameraOutline } from "react-icons/io5";
import './styles.css';

export function Dropzone() {
    const [selectedFileurl, setSelectedFileurl] = useState('');
    
    const onDrop = useCallback((acceptedFiles: any) => {
        const file = acceptedFiles[0];
        
        const fileUrl = URL.createObjectURL(file);
        
        setSelectedFileurl(fileUrl);
    }, [])
    
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <div className='dropzone' {...getRootProps()}>
            <input {...getInputProps()} />
            {selectedFileurl
                ? <img src={selectedFileurl} alt="Logo da Empresa" />
                : <h6>
                    <IoCameraOutline />
                    Logo Empresa
                </h6>
            }
        </div>
    )
}
