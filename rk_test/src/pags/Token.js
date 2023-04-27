import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import axios from 'axios';

import {TextField, Button} from '@mui/material';



function App() {
  const [token, setToken] = useState('토큰값');
  const [copied, setCopied] = useState(false);
  const [id, setId] = useState('wrd6774')
  const [data,setData] = useState();

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(()=>{

    const fetchData = async () => {
        try{
        const response = await axios.post("http://localhost:3001/api/token", {
            id,
          }).then()
        
        }catch(error){
            console.log(error);
        }

    }
    fetchData();
},[])

  return (
    <>
    <div>
    {sessionStorage.getItem("loginId")}
    </div>
        <div>
            <div style={{paddingTop:"400px"}}/>
            <Container>
                <Grid container spacing={2}>
                        <Grid item xs={12}>
                                <Box
                                    sx={{
                                        display: 'gird',
                                        '& > :not(style)': {
                                        width:"100%",
                                        height: 300,
                                        },
                                        gridTemplateColumns: { md: '10fr 10fr' },
                                    }}
                                    >
                                    <Paper elevation={16}>
                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding:"100px"}}>
                                            <CopyToClipboard text={token} onCopy={handleCopy}>
                                                <Button style={{height:"54px"}} variant="contained">{copied ? <LibraryAddCheckIcon/> : <ContentCopyIcon/>}</Button>
                                            </CopyToClipboard>
                                            <TextField style={{width:"800px"}} value={token} readOnly />
                                        </div>
                                    </Paper>
                                </Box>
                        </Grid>

                </Grid>
            </Container>
            <div>
            </div>
        </div>
    </>
  );
}

export default App;
