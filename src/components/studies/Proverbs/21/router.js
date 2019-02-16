import Part1 from '@/components/studies/Proverbs/21/Part1'
import Part2 from '@/components/studies/Proverbs/21/Part2'
import Part3 from '@/components/studies/Proverbs/21/Part3'
import Part4 from '@/components/studies/Proverbs/21/Part4'
import Part5 from '@/components/studies/Proverbs/21/Part5'
import Part6 from '@/components/studies/Proverbs/21/Part6'
import Part7 from '@/components/studies/Proverbs/21/Part7'

export default [
  {
    path: '/',
    redirect: 'part/1'
  },
  {
    path: 'part/1',
    name: 'Part1',
    component: Part1
  },
  {
    path: 'part/2',
    name: 'Part2',
    component: Part2
  },
  {
    path: 'part/3',
    name: 'Part3',
    component: Part3
  },
  {
    path: 'part/4',
    name: 'Part4',
    component: Part4
  },
  {
    path: 'part/5',
    name: 'Part5',
    component: Part5
  },
  {
    path: 'part/6',
    name: 'Part6',
    component: Part6
  },
  {
    path: 'part/7',
    name: 'Part7',
    component: Part7
  }
]
