export interface SliderDto {
    id: string;
    titleEn?: string | null;
    titleAr?: string | null;
    title?: string | null;
    descriptionEn?: string | null;
    descriptionAr?: string | null;
    description?: string | null;
    imageUrl?: string | null;
}

export interface CreateSliderCommand {
    titleEn: string;
    titleAr: string;
    descriptionEn: string;
    descriptionAr: string;
    imageUrl: string;
}

export interface UpdateSliderCommand {
    id: string;
    titleEn: string;
    titleAr: string;
    descriptionEn: string;
    descriptionAr: string;
    imageUrl: string;
}
