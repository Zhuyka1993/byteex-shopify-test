
export const featuredReviewQuery = `
  *[_type == "review" && featured == true][0]
`

export const reviewsQuery = `
  *[_type == "review" && featured != true]
`
export const talkAboutYouQuery = `
  *[_type == "talkAboutYou"][0]
`
export const ugcGalleryQuery = `
  *[_type == "ugcGallery"][0] {
    images
  }
`