
import ModalImage from 'react-modal-image';

interface GalleryImage {
    id: string;
    name: string;
}

const gallery_img_data: GalleryImage[] = [
    {
        id: "UBdUpt6oTOE",
        name: "gal1.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal2.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal3.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal4.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal5.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal6.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal7.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal8.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal9.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal10.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal11.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal12.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal13.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal14.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal15.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal16.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal17.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal18.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal19.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal3.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal3.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal3.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal3.jpg"
    },
    {
        id: "UBdUpt6oTOE",
        name: "gal3.jpg"
    }
]


const GalleryArea = () => {

    return (
        <>
            <div className="col-lg-12">
                <article className="postbox post format-image mb-40">
                    <div className="container-fluid">
                        <div className="row gx-2 gy-2">
                            {gallery_img_data.map((img_data, index) =>
                                <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-xl-2">
                                    <div className="postbox__video ">
                                        {/* <Image src={'/assets/img/gallery/' + img_data.name} alt="blog image" width={200} height={150} /> */}
                                        <ModalImage
                                            small={require(`../../assets/img/gallery/${img_data.name}`)}
                                            large={require(`../../assets/img/gallery/${img_data.name}`)}
                                            alt=""
                                            className={'sh__gallery'}
                                            showRotate={true}
                                            hideZoom={false}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
};

export default GalleryArea;