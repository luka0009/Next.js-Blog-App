import React from 'react'
import Card from '../(shared)/Card';

type Props = {}

const Literature = (props: Props) => {
  return (
    <section className="mt-10">
      <hr className="border-1" />
      {/* HEADER */}
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-green py-2 px-5 text-wh-900 text-sm font-bold">
          Literature
        </h4>
        <p className="font-bold text-2xl">Blogposts on Literature 📚</p>
      </div>

      {/* CARDS ROW */}
      <div className="sm:flex justify-between gap-8">
        <Card
          className="bg-wh-500 basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
        //   post={travelPosts[0]}
        />
        <Card
          className="bg-wh-500 basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
        //   post={travelPosts[1]}
        />
        <Card
          className="bg-wh-500 basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
        //   post={travelPosts[2]}
        />
      </div>
      <Card
        className="bg-wh-500 sm:flex justify-between items-center gap-3 mt-7 mb-5"
        imageHeight="h-80"
        // post={travelPosts[3]}
      />
    </section>
  )
}

export default Literature;