import React from 'react';
import "./ChatInput.scss"

const ChatInput = () => {
  return (
   <div class="write">
                <input placeholder="Ask lirikai for changes ..." type="text" />
                <a href="javascript:;" class="write-link send"></a>
            </div>
  );
};

export default ChatInput;
