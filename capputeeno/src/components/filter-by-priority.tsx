import styled from "styled-components"
import { ArrowIcon } from "./arrow-icon"
import { useState } from "react";
import { useFilter } from "@/Hooks/useFilter";
import { PriorityTypes } from "@/types/priority-types";

interface FilterByPriorityProps {

}

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button{
        font-family: inherit;
        font-weight: 400;
        cursor: pointer;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);

        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        background: transparent;

        svg{
            margin-left: 16px;
        }
    }
`

const PriorityFilter = styled.ul`
    list-style: none;
    width: 250px;
    position: absolute;
    backgorund: white;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;

    top: 100%;

    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
    }

    li + li {
        margin-top: 4px;
    }

`;

export function FilterByPriority(props: FilterByPriorityProps) {
    const  [ isOpen, setIsOpen] = useState(false)
    const {setPriority} = useFilter()
    const handleOpen =  () => setIsOpen(prev => !prev)
    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority
        setIsOpen(false)
    }
    return (
        <FilterContainer>  
            <button onClick= {handleOpen}>
                Organize by
                <ArrowIcon/>
            </button>
            {isOpen && 
            <PriorityFilter>
                <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Newest</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Price: Highest  - Lowest  </li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Price: Lowest - Highest </li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Best sellers </li>
            </PriorityFilter>
            }
        </FilterContainer>
    )
}