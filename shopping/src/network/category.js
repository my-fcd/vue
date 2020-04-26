import axios from './axios'


export function getCategory() {
  return axios({
    url: '/api/h8/category'
  })
}

export function getSubcategory(maitKey) {
  return axios({
    url: '/api/h8/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return axios({
    url: '/api/h8/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
