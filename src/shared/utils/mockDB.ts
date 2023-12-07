import { DotType } from '../types'

export type SwiperDataType = {
  id: number
  data: number
  text: string
}
type FishTextType = {
  year: number
  text: string[]
}
export type ThemeDataType = { id: DotType; title: string }

export const themeData: ThemeDataType[] = [
  { id: 0, title: 'Скульптура' },
  { id: 1, title: 'Спорт' },
  { id: 2, title: 'Музыка' },
  { id: 3, title: 'Кино' },
  { id: 4, title: 'Искусство' },
  { id: 5, title: 'Наука' }
]

export const yearIndex: number[] = [1949, 1961, 1973, 1987, 1994, 2015]

export const fishTextsArray: FishTextType[] = [
  {
    year: 1949,
    text: [
      'Рыбы имеют острые трески, такие как острые плавники и морда.',
      'Fish have unique characteristics, such as sharp teeth and mud.',
      'Рыбы имеют острые трески, такие как острые плавники и морда.',
      'Fish have unique characteristics, such as sharp teeth and mud.',
      'Les poissons ont des caractéristiques unique, telles que les yeux brillants et les moules.',
      'I peces hanno caratteristiche uniche, come i denti brillanti e i moules.'
    ]
  },
  {
    year: 1961,
    text: [
      'Острокрылые трески имеют уникальные черты, такие как острые плавники и морда.',
      'Sharp teeth have unique patterns, such as sharp teeth and mud.',
      'Острые трески имеют уникальные черты, такие как острые плавники и морда.',
      'Sharp teeth have unique patterns, such as sharp teeth and mud.',
      'Scharfe Zähne haben einzigartige Formen, wie scharfe Zähne und Mud.',
      'Scharfe Zähne haben einzigartige Darstellungen, wie scharfe Zähne und Mud.'
    ]
  },
  {
    year: 1973,
    text: [
      'Лососевые рыбы мигрируют в реки для нереста, преодолевая сильные течения.',
      'Loose-finned fish migrate to streams for resistance, overcome strong erosions.',
      'Лососевые рыбы мигрируют в реки для нереста, преодолевая сильные течения.',
      'Loose-finned fish migrate to streams for resistance, overcome strong erosions.',
      'Loose-finned Fische migrieren in Wasserkreise für Resistenz, überstehen starkere Erosionen.',
      'I peces lascianos migrar en ríos para resistencia, superan las erosiones fuertes.'
    ]
  },
  {
    year: 1987,
    text: [
      'Экзотическая рыба, как ангелы-кирасины, является популярным объектом аквариумистики.',
      'Exotic fish, such as angel fish-kirashins, is a popular aquarium object.',
      'Экзотическая рыба, как ангелы-кирасины, является популярным объектом ак�',
      'Aquarium object, such as angel fish-kirashins, is a popular aquarium object.',
      'Exotic fish, such as angel fish-kirashins, is a popular aquarium object.',
      'Экзотическая рыба, как ангелы-кирасины, является популярным объектом аквариумистики.'
    ]
  },
  {
    year: 1994,
    text: [
      'Морские животные, такие как моллюски, являются важной частью рациона некоторых рыб.',
      'Marine animals, such as molluscs, are important parts of some fish.',
      'Морские животные, такие как моллюски, являются важной частью рациона некоторыхрыб.',
      'Marine animals, such as molluscs, are important parts of some fish.',
      'Marine animals, such as molluscs, are important parts of some fish.',
      'Marine animals, such as molluscs, are important parts of some fish.'
    ]
  },
  {
    year: 2015,
    text: [
      'Амазонские арангуаны обитают в тропических лесах и славятся своей яркой окраской.',
      'Amazons are found in tropical forest and are adorable with their bright colors.',
      'Амазонские арангуаны обитают в тропических лесах и славятся своей яркой окраской.',
      'Amazons are found in tropical forest and are adorable with their bright colors.',
      'Amazons are found in tropical forest and are adorable with their bright colors.',
      'Amazons are found in tropical forest and are adorable with their bright colors.'
    ]
  }
]

export const frontElement = 'frontElement'
export const backElement = 'backElement'
