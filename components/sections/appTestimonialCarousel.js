/** @jsxImportSource theme-ui */
import { useEffect, useState } from 'react';
import testimonials from '../../lib/testimonials';
import { Container } from 'theme-ui';

const TestimonialCarousel = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setIndex((oldIndex) => {
                if (oldIndex + 1 >= testimonials.length) {
                    return 0;
                }
                return oldIndex + 1;
            });
        }, 7000);

        return () => clearInterval(timer);
    }, [index]);

    return (
        <section
            id="testimonials"
            sx={{
                minHeight: ['600px', '500px', '500px', '500px'],
                paddingY: ['100px', '0px', '0px', '0px'],
                display: 'flex',
                alignItems: 'center',
                backgroundImage: `url('/images/dot-map.png')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                repeat: 'relative',
            }}
        >
            <Container sx={{ maxWidth: '900px', px: '30px' }}>
                <h2 sx={{ variant: 'text.h2', textAlign: 'center' }}>
                    What Are They Saying?
                </h2>
                <p sx={{ textAlign: 'center', marginTop: '50px' }}>
                    &quot;{testimonials[index].testimonial}&quot;
                </p>
                <p
                    sx={{
                        textAlign: 'center',
                        marginTop: '20px',
                        fontWeight: 'medium',
                    }}
                >
                    {testimonials[index].author}
                </p>
                <div
                    sx={{
                        width: '50px',
                        height: '3px',
                        bg: 'secondary',
                        margin: '5px auto',
                    }}
                ></div>
            </Container>
        </section>
    );
};

export default TestimonialCarousel;
