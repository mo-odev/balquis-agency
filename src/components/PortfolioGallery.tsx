import React from "react";

const galleryFiles = [

	"photo_2025-10-17_14-08-15.jpg",
	"photo_2025-10-17_14-08-19.jpg",
	"video_2025-10-17_14-07-23.mp4",
	"video_2025-10-17_14-07-36.mp4",
	"video_2025-10-17_14-07-42.mp4",
	"video_2025-10-17_14-07-47.mp4",
	"video_2025-10-17_14-07-51.mp4",
	"video_2025-10-17_14-07-56.mp4",
	"video_2025-10-17_14-08-00.mp4",
	"video_2025-10-17_14-08-05.mp4",
	"video_2025-10-17_14-08-25.mp4",
];

const isImage = (file: string) => file.match(/\.(jpg|jpeg|png|gif)$/i);
const isVideo = (file: string) => file.match(/\.(mp4|webm|ogg)$/i);
const getAssetUrl = (file: string) => `/src/assets/gallery/${file}`;
const getVideoPoster = (videoFile: string) => {
	const baseName = videoFile.replace(/\.(mp4|webm|ogg)$/i, "");
	const jpgPoster = `${baseName}.jpg`;
	return galleryFiles.includes(jpgPoster) ? getAssetUrl(jpgPoster) : undefined;
};

const PortfolioGallery = () => {
	return (
		<section className="py-20 relative">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						<span className="text-gradient">معرض الأعمال</span>
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						نماذج من أعمالنا السابقة في مختلف المجالات
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{galleryFiles.map((file, idx) => (
						<div
							key={idx}
							className="bg-card rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg flex flex-col"
						>
							{isImage(file) ? (
								<img
									src={getAssetUrl(file)}
									alt={file}
									className="w-full h-64 object-cover"
								/>
							) : isVideo(file) ? (
								<video
									controls
									className="w-full h-64 object-cover"
									poster={getVideoPoster(file)}
								>
									<source src={getAssetUrl(file)} type="video/mp4" />
									متصفحك لا يدعم عرض الفيديو
								</video>
							) : null}
							<div className="p-4 flex-1 flex flex-col justify-end">
								<h3 className="font-semibold text-lg text-primary mb-2">
									{file}
								</h3>
								{/* يمكن إضافة وصف أو تصنيف هنا لاحقاً */}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default PortfolioGallery;
