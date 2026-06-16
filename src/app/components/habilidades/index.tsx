"use client";
import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, rectSortingStrategy, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./estilos.css";

// Componente individual de la habilidad "arrastrable"
function SkillItem({ id }: { id: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="skill-item">
      {id}
    </div>
  );
}

export default function Habilidades() {
  const [skills, setSkills] = useState(["Next.JS", "React JS", "Node.js", "Nest.js", "TypeScript", "JavaScript", "SQL", "Mongo DB", "Tailwind", "Git", "GitHub", "Scrum"]);

  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (active.id !== over.id) {
      setSkills((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <section id="habilidades" className="habilidades-container">
      <h2>Inventario de Habilidades</h2>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={skills} strategy={rectSortingStrategy}>
          <div className="grid">
            {skills.map((skill) => <SkillItem key={skill} id={skill} />)}
          </div>
        </SortableContext>
      </DndContext>
    </section>
  );
}