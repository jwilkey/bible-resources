import Part1 from '@/components/studies/Philippians/study/Part1'
import Part2 from '@/components/studies/Philippians/study/Part2'
import Part3 from '@/components/studies/Philippians/study/Part3'
import PhilippiansCloud from '@/components/studies/Philippians/PhilippiansCloud'

export default [
  {
    path: 'cloud',
    name: 'PhilippiansCloud',
    component: PhilippiansCloud
  },
  {
    path: 'studies/1',
    name: 'PhilippiansStudy1',
    component: Part1
  },
  {
    path: 'studies/2',
    name: 'PhilippiansStudy2',
    component: Part2
  },
  {
    path: 'studies/3',
    name: 'PhilippiansStudy3',
    component: Part3
  }
]
