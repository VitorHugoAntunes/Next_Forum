import { TopicModalContext } from "@/contexts/TopicModalContext";
import { useContext, useEffect, useState } from "react";
import { Content, FormContainer, Overlay } from "./styles";
import { FiX } from 'react-icons/fi'
import ButtonComponent from "../Button";
import { categoriesData } from '../../data/categories';

type TopicFormData = {
    category: number;
    title: string;
    text: string;
}

export default function TopicModal() {
    const { isModalOpen, changeModalStatus } = useContext(TopicModalContext);
    const [selectedCategory, setSelectedCategory] = useState(0);

    const [formData, setFormData] = useState<TopicFormData>({
        category: 0,
        title: "",
        text: "",
    })

    function handleSelectedCategory(categoryId: number) {
        setSelectedCategory(categoryId);
        setFormData({ ...formData, category: categoryId })
    }

    function handleFormData(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("Dados enviados: ", formData)
    }

    function closeModalAndResetFormData() {
        setFormData({
            category: 0,
            title: "",
            text: "",
        });

        setSelectedCategory(0);
        changeModalStatus();
    }

    useEffect(() => {
        if (isModalOpen === true) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [isModalOpen])

    return isModalOpen ? (
        <Overlay>
            <Content>
                <h2>Create a new topic</h2>

                <FormContainer action="" onSubmit={handleFormData}>
                    <label htmlFor="">Choose topic category:</label>
                    <fieldset>
                        {categoriesData.map((category) => (
                            <span
                                key={category.id}
                                style={{ background: category.color }}
                                className={selectedCategory === category.id ? "categoryOption selected" : "categoryOption"}
                                onClick={() => handleSelectedCategory(category.id)}
                            >
                                {category.title}
                            </span>
                        ))}
                    </fieldset>

                    <label htmlFor="">Type your topic title:</label>
                    <input
                        type="text"
                        name="title" id=""
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        value={formData.title}
                    />

                    <label htmlFor="">Type your topic below:</label>
                    <textarea
                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                        value={formData.text}
                    />

                    <div className="formActions">
                        <ButtonComponent
                            type="button"
                            category={"cancel"}
                            onClick={closeModalAndResetFormData}
                        >
                            Cancel
                        </ButtonComponent>
                        <ButtonComponent
                            type="submit"
                            category={"confirm"}
                        >
                            Confirm
                        </ButtonComponent>
                    </div>
                </FormContainer>

                <button className="closeButton" onClick={closeModalAndResetFormData}>
                    <FiX size={24} />
                </button>
            </Content>
        </Overlay>
    ) : null;
}