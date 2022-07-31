import React from "react";
import { Container, Stack, TextField, Button } from "@mui/material";
import CustomAppBar from "../../components/CustomAppBar";
import Dropzone from '../../components/Dropzone';

const NewPost = () => {
    return (
        <div>
            <CustomAppBar title="Novo Post" />
            <Container sx={{ marginTop: 12 }}>
                <Stack spacing={6}>
                    <TextField
                        variant="standard"
                        label="Título"
                        name="title"
                    />
                    <TextField
                        variant="standard"
                        label="O que está acontecendo?"
                        name="description"
                        multiline
                        minRows={3}
                    />
                    <Dropzone onFileUploaded={() => {}} />
                    <Button variant="contained" type="submit">
                        Publicar
                    </Button>
                </Stack>
            </Container>
        </div>
    );
};

export default NewPost;