
const isIntersecting = (entry) => {
    return entry.isIntersecting;
};

const loadImage = (entry)=>{
    const container = entry.target;
    const image = container.firstChild;
    const url = image.dataset.src;
    //cargue imagen
    image.src = url;

    //desrigistrar
    observer.unobserve(container);
};

const observer = new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting).forEach(loadImage)
});

//
export const registerImage = (imagen) =>{
    //intersectionObserver-> (imagen)
    observer.observe(imagen)
};