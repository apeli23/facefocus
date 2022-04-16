import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';

export default function Home() {
  const uploadVideo = async (base64) => {
    console.log("uploading to backend...");
    await readFile(blob).then((encoded_file) => {
      try {
        fetch('/api/upload', {
          method: 'POST',
          body: JSON.stringify({ data: encoded_file }),
          headers: { 'Content-Type': 'application/json' },
        })
          .then((response) => response.json())
          .then((data) => {
            setLink(data.data);
          });
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <div className="container">
      <h1>Create a Nextjs face detector with Cloudinary</h1>
      <div className="row">
        <div className="column">
          <img width="550" height="400" src="https://res.cloudinary.com/dogjmmett/image/upload/v1649911466/officelady.jpg" />
        </div>
        <div className="column">
          <Image
            cloudName="dogjmmett"
            secure={true}
            upload_preset="my_unsigned_preset"
            publicId="officelady"
          >
            <Transformation width="200" height="200" gravity="face" crop="thumb" />
          </Image>
        </div>
      </div>
    </div >
  )
};


                          