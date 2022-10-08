
export const get_random_image_from_lorem_picsum = ({height, width}?: {height: number, width: number}) => {
  if(!height && !width){
    return 'https://picsum.photos/200';
  }
  const base = 'https://picsum.photos';
  let url = '';
  if(width){
    url = `${base}/${width}`;
    if(height){
      url += `/${height}`;
    }
  }
  else if(height){
    url = `${base}/${height}`;
  }
  return base;
}
