import {Button, HStack, useToast} from "@chakra-ui/react";
import {useEffect, useRef, useState} from "react";
import {loadPyodide} from "pyodide";


const Generation = props => {

    const fileInputRef = useRef();
    const toast = useToast();

    const [fileLoaded, setFileLoaded] = useState(false);
    const [fullyLoaded, setFullyLoaded] = useState(false);
    const [pyodide, setPyodide] = useState(null);

    useEffect(() => {
        setFileLoaded(fileCorrectlyLoaded());
        setFullyLoaded(false);
        if(!pyodide){
            setPyodide(loadPyodide({
                indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.21.3/full/'
            }));
            return;
        }
        if(fileLoaded) {
            pyodide.then(python => {
                fetch("./LADXR/ladxr.zip").then(response => {
                    response.arrayBuffer().then(buffer => {
                        python.unpackArchive(buffer, "zip");
                        const romArray = Uint8Array.from(localStorage.getItem("ladx-rom").split(','), x => parseInt(x));
                        python.FS.writeFile('/input.gbc', romArray, {encoding: 'binary'});
                        setFullyLoaded(true);
                    })
                })
            });
        }
    },[fileLoaded, pyodide]);

    const fileCorrectlyLoaded = () => {
        return localStorage.getItem('ladx-rom') !== null;
    }

    const selectFileButtonHandler = () => {
        fileInputRef.current.click();
    }

    const selectFileHandler = (event) => {
        const files = event.target.files;
        if(files.length !== 1){
            return;
        }
        const romFile = files[0];
        const reader = new FileReader();
        reader.onload = onFileLoaded;
        reader.readAsArrayBuffer(romFile);
    }

    const onFileLoaded = (event) => {
        const arrayBuffer = event.target.result;
        localStorage.setItem('ladx-rom', new Uint8Array(arrayBuffer));
        toast({
            title: 'File loaded',
            description: 'File has been successfully loaded',
            status: 'success',
            duration: '1500',
            isClosable: true
        });
        setFileLoaded(true);
    }

    const randomizeClickHandler = () => {
        pyodide.then(python => {
            const ladxr = python.pyimport("main");
            ladxr.main(["/input.gbc"]);
        });
    }

    return (
        <HStack margin={3}>
            <Button width='100%' onClick={selectFileButtonHandler} border={fullyLoaded ? '1px solid green' : '1px solid red'}>Select input ROM</Button>
            <input type='file' ref={fileInputRef} id='romfile' style={{display: 'none'}} onChange={selectFileHandler}/>
            <Button disabled={!fullyLoaded} width='100%' onClick={randomizeClickHandler} isLoading={!fullyLoaded} loadingText={fileLoaded ? 'Loading LADXR...' : 'Awaiting ROM selection'}>Randomize!</Button>
        </HStack>
    );
}

export default Generation;