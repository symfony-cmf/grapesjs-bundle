<?php

namespace Symfony\Cmf\Bundle\GrapesjsBundle\Tests\Fixtures\App\Model;

/**
 * @author Maximilian Berghoff <Maximilian.Berghoff@mayflower.de>
 */
class PageModel
{
    /**
     * @var
     */
    private $title;

    /**
     * @var
     */
    private $body;

    /**
     * @return mixed
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param mixed $title
     */
    public function setTitle($title): void
    {
        $this->title = $title;
    }

    /**
     * @return mixed
     */
    public function getBody()
    {
        return $this->body;
    }

    /**
     * @param mixed $body
     */
    public function setBody($body): void
    {
        $this->body = $body;
    }
}
