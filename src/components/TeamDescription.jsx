import React from 'react';
import { Card, Typography, Avatar, Grid, Link as MuiLink } from '@mui/material';
import '../css/TeamDescription.css';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


const TeamDescription = () => {
    const teamMembers = [
        { name: 'Egor Pankratiev', github: 'https://github.com/riborok', instagram: 'https://www.instagram.com/egorpnkrtw/', telegram: 'https://t.me/egorpnkrtw', alias: 'Riborok', image: "https://avatars.githubusercontent.com/u/112758007?v=4" },
        { name: 'Artur Kukhatskavolets', github: 'https://github.com/Archichil', instagram: 'https://www.instagram.com/k.archichil/', telegram: 'https://t.me/Archichil', alias: 'Archichil', image: "https://avatars.githubusercontent.com/u/112758007?v=4"},
        { name: 'Stas Gabrus', github: 'https://github.com/Ferret451', instagram: 'https://www.instagram.com/ferrett451/', telegram: 'https://t.me/Ferret451', alias: 'Ferret451', image: "https://avatars.githubusercontent.com/u/112757776?v=4"},
        { name: 'Yana Zhuk', github: 'https://github.com/Rawwzer', instagram: 'https://www.instagram.com/rawwzero/', telegram: 'https://t.me/RawwZer', alias: 'RawwZer', image: "https://avatars.githubusercontent.com/u/82700519?v=4"}
    ];

    return (
        <div>=
            <h2 className={"team-h2"}>Команда разработчиков</h2>
            <Grid className={"dev-cards"} container spacing={2} justifyContent="center">
                {teamMembers.map((member, index) => (
                    <Grid item key={index}>
                        <Card className={'developer-card'} elevation={10}>
                            <Avatar className={"developer-avatar"} alt={member.name} src={member.image} sx={{ width: 150, height: 150 }}/>
                            <Typography variant="h5">{member.name}</Typography>
                            <Typography variant="h6">{member.alias}</Typography>
                            <div className={'social-icons'}>
                                <MuiLink href={member.github} target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon fontSize="large"/>
                                </MuiLink>
                                <MuiLink href={member.telegram} target="_blank" rel="noopener noreferrer">
                                    <TelegramIcon fontSize="large"/>
                                </MuiLink>
                                <MuiLink href={member.instagram} target="_blank" rel="noopener noreferrer">
                                    <InstagramIcon fontSize="large"/>
                                </MuiLink>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default TeamDescription;
