export default function MapSection() {
    return (
        <div className="h-full w-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13134.330229708256!2d135.5002531!3d34.6937374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e0d2812a1a03%3A0x2efb5c8a9dc9f8dc!2sOsaka!5e0!3m2!1sen!2sjp!4v1659349284932"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl border"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}