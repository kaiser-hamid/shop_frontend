import Image from 'next/image';

export default function StatusBanner() {
    return (
        <section>
            <div className="bg-purple-800 mt-10">
                <div className="container">
                    <div className='w-full'>
                        <Image
                            alt="info"
                            src="/assets/images/featured/status-banner.webp"
                            width={980}
                            height={428}
                            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
