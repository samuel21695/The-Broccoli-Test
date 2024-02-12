import './Cards.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <>
      {/* Card 1 */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia className='pizza'
          sx={{ height: 140 }}
          title="Pizza"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pizza 🥦🥦🥦
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, rerum! Maiores aspernatur fuga eveniet explicabo earum sequi deleniti nihil qui odit? Necessitatibus sit ab, animi cupiditate perspiciatis iure optio recusandae.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      {/* Card 2 */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          title="Sushi"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sushi 🥦🥦
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, rerum! Maiores aspernatur fuga eveniet explicabo earum sequi deleniti nihil qui odit? Necessitatibus sit ab, animi cupiditate perspiciatis iure optio recusandae.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      {/* Card 3 */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          title="apple"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Apple 🥦
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, rerum! Maiores aspernatur fuga eveniet explicabo earum sequi deleniti nihil qui odit? Necessitatibus sit ab, animi cupiditate perspiciatis iure optio recusandae.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      {/* Card 4  */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          title="hotdog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hot dog 🥦🥦
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, rerum! Maiores aspernatur fuga eveniet explicabo earum sequi deleniti nihil qui odit? Necessitatibus sit ab, animi cupiditate perspiciatis iure optio recusandae.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      {/* Card 5  */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          title="Chocolate"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Chocolate 🥦
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, rerum! Maiores aspernatur fuga eveniet explicabo earum sequi deleniti nihil qui odit? Necessitatibus sit ab, animi cupiditate perspiciatis iure optio recusandae.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}