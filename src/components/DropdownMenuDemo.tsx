import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';
import './DropdownMenuDemo.css';

const DropdownMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState('pedro');

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="DropdownMenuItem">
            Reiniciar Player <div className="RightSlot">⌘+R</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            Voltar conteudo <div className="RightSlot">⇧</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            Avançar conteudo <div className="RightSlot">⇧</div>
          </DropdownMenu.Item>
        
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
              Selecionar conteudo
              <div className="RightSlot">
                <ChevronRightIcon />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className="DropdownMenuSubContent"
                sideOffset={2}
                alignOffset={-5}
              >
                
                <DropdownMenu.Item className="DropdownMenuItem">1. Developer Tools <div className="RightSlot">video</div></DropdownMenu.Item>
                <DropdownMenu.Item className="DropdownMenuItem">2. Developer Enginers <div className="RightSlot">video</div></DropdownMenu.Item>
                <DropdownMenu.Item className="DropdownMenuItem">3. Developer Tools <div className="RightSlot">video</div></DropdownMenu.Item>
                <DropdownMenu.Item className="DropdownMenuItem">4. Developer Tools <div className="RightSlot">video</div></DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.CheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Auto Play <div className="RightSlot">⌘+B</div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Auto Concluir Conteudos 
          </DropdownMenu.CheckboxItem>


          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;