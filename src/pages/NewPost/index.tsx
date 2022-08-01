import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Stack, TextField, Button } from "@mui/material";
import CustomAppBar from "../../components/CustomAppBar";
import Dropzone from '../../components/Dropzone';

import server from '../../api/server';

const NewPost = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("accessToken");

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        title2: ""
    });
    const [selectedFile, setSelectedFile] = useState<File>();

    const handleInputchange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const { title, description } = formData;
        const data = new FormData();
        data.append("title", title);
        data.append("description", description);
        if (selectedFile) {
            data.append("file", selectedFile);
        }

        try {
            const response = await server.post("/posts", data, {
                headers: { Authorization: `Bearer ${token}` }
            });
            navigate("/home");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <CustomAppBar title="Novo Post" />
            <Container sx={{ marginTop: 12 }}>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={6}>
                        <TextField variant="standard"
                            label="Título"
                            name="title"
                            value={formData.title}
                            onChange={handleInputchange}
                        />
                        {selectedFile ? null : (<TextField
                            variant="standard"
                            label="O que está acontecendo?"
                            name="description"
                            multiline
                            minRows={3}
                            value={formData.description}
                            onChange={handleInputchange}
                        />)}
                        <Dropzone onFileUploaded={setSelectedFile} />
                        <Button variant="contained" type="submit">
                            Publicar
                        </Button>
                    </Stack>
                </form>
            </Container>
        </div>
    );
};

export default NewPost;