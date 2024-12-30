import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import '@fontsource/roboto/400.css';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, backgroundColor:'dimgrey' }}>
      <CardHeader style={{color:'white', fontSize:'35px'}} 
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" style={{color:'white', fontSize:'35px'}}>
            <MoreVertIcon />
          </IconButton>
        }
        
        title="Nails done by Flower"
        titleTypographyProps={{
          variant: 'h5', // Adjust the typography variant
          color: 'white', // Set color using theme palette
          sx: { fontWeight: 'bold', fontSize: '20px' }, // Additional styles
        }}
      />
      <CardMedia
        component="img"
        height="194"
        image="/flower-nail.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" sx={{ color: 'text.secondary', color:'whitesmoke' }}>
            ##CandyCaneVibes
            ##HolidayNails                     
        </Typography>
        <Typography variant="h5" sx={{ color: 'text.secondary', color:'whitesmoke' }}>
            ## Flower                     
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
         
        </CardContent>
      </Collapse>
    </Card>
  );
}


