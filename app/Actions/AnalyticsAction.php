<?php

namespace App\Actions;

use TCG\Voyager\Actions\AbstractAction;

class AnalyticsAction extends AbstractAction
{
    public function getTitle()
    {
        return 'Analytics';
    }


    public function shouldActionDisplayOnDataType()
    {
        return $this->dataType->slug == 'events';
    }
    public function getIcon()
    {
        return 'voyager-data';
    }

    public function getPolicy()
    {
        return 'read';
    }

    public function getAttributes()
    {
        return [
            'class' => 'btn btn-sm btn-primary pull-left',
        ];
    }

    public function getDefaultRoute()
    {
        return route('voyager.events.analytics', ['event' => $this->data]);
    }
}
